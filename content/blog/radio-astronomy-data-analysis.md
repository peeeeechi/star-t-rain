---
title: "電波天文学データ解析の実践 - PythonとCASAを使った現代的手法"
date: "2025-01-08"
excerpt: "電波天文学データの解析に必要なツールと手法を実践的に解説します。PythonライブラリからCASAまで、現代の解析環境を紹介。"
category: "astronomy"
tags: ["データ解析", "Python", "CASA", "電波天文学", "プログラミング"]
author: "中村桃太朗"
published: true
---

# 電波天文学データ解析の実践 - PythonとCASAを使った現代的手法

## はじめに

電波天文学の観測データは、可視光とは大きく異なる特性を持ちます。大容量かつ複雑な構造のデータを効率的に処理し、科学的知見を得るためには、適切なツールと手法の理解が不可欠です。

## 電波天文学データの特徴

### データの特性
電波観測データには以下のような特徴があります：

```python
# 典型的な電波データの構造
data_structure = {
    'visibility': '複素数の可視度関数',
    'uv_coverage': 'u-v平面でのサンプリング',
    'frequency': '多チャンネル分光データ',
    'polarization': '偏波情報（I, Q, U, V）',
    'time': '時間変化の追跡'
}
```

### データサイズの課題
- **ALMAデータ**：1観測あたり数GB～数TB
- **VLBIデータ**：局間の相関処理が必要
- **連続観測**：長期間の時系列データ

## 主要解析ツール

### 1. CASA (Common Astronomy Software Applications)
電波天文学の標準的解析パッケージ：

```python
# CASAでの基本的なデータ読み込み
import casa_tools as tools
import casa_tasks as tasks

# Measurement Set（MS）の読み込み
msfile = 'observation.ms'
tasks.listobs(vis=msfile, verbose=True)

# 画像化処理
tasks.tclean(
    vis=msfile,
    imagename='output_image',
    cell='0.1arcsec',
    imsize=512,
    niter=1000,
    threshold='0.1mJy'
)
```

### 2. Python生態系
現代的なデータ解析には以下のライブラリが重要：

#### 基本ライブラリ
```python
import numpy as np
import matplotlib.pyplot as plt
import scipy as sp
from astropy import units as u
from astropy.coordinates import SkyCoord
from astropy.io import fits
from astropy.wcs import WCS
```

#### 電波天文学専用ライブラリ
```python
# spectral-cube: 3次元データキューブ解析
from spectral_cube import SpectralCube

# radio-beam: ビーム解析
from radio_beam import Beam

# casatasks: CASA機能のPython版
import casatasks
```

## 実践的解析ワークフロー

### Step 1: データの検証とクリーニング
```python
def data_inspection(msfile):
    """MSファイルの基本情報を取得"""
    
    # 観測情報の確認
    tasks.listobs(vis=msfile)
    
    # データの品質確認
    tasks.flagdata(
        vis=msfile,
        mode='quack',  # 観測開始・終了の不安定部分を除去
        quackinterval=10.0
    )
    
    # RFI（電波妨害）の除去
    tasks.flagdata(
        vis=msfile,
        mode='rflag',  # 自動RFI検出
        datacolumn='data'
    )
    
    return True
```

### Step 2: キャリブレーション
```python
def calibration_pipeline(msfile, calfile):
    """標準的なキャリブレーション手順"""
    
    # フラックス較正
    tasks.setjy(vis=calfile, standard='Perley-Butler 2017')
    
    # 遅延較正
    tasks.gaincal(
        vis=msfile,
        caltable='delay.cal',
        gaintype='K',
        solint='inf'
    )
    
    # バンドパス較正
    tasks.bandpass(
        vis=msfile,
        caltable='bandpass.cal',
        solint='inf',
        gaintable=['delay.cal']
    )
    
    # ゲイン較正
    tasks.gaincal(
        vis=msfile,
        caltable='phase.cal',
        gaintype='G',
        solint='int',
        gaintable=['delay.cal', 'bandpass.cal']
    )
    
    # 較正の適用
    tasks.applycal(
        vis=msfile,
        gaintable=['delay.cal', 'bandpass.cal', 'phase.cal']
    )
```

### Step 3: 画像化
```python
def imaging_pipeline(msfile, output_name):
    """最適化された画像化パラメータ"""
    
    # セル/画像サイズの計算
    # 最高分解能の1/5をセルサイズの目安とする
    beam_size = get_synthesized_beam(msfile)
    cell_size = beam_size / 5.0
    
    # 画像化実行
    tasks.tclean(
        vis=msfile,
        imagename=output_name,
        cell=f'{cell_size}arcsec',
        imsize=2048,
        
        # 画像化アルゴリズム
        deconvolver='hogbom',
        niter=10000,
        threshold='3sigma',
        
        # 自然重み付け（感度優先）
        weighting='natural',
        
        # マルチスケール対応
        scales=[0, 6, 20, 60],
        
        # 対話的クリーニング
        interactive=False,
        
        # 画像平面でのマスク
        usemask='auto-multithresh'
    )
```

## 高度な解析技術

### 分光線解析
```python
def spectral_analysis(cube_file):
    """分光線キューブの解析"""
    
    # SpectralCubeでの読み込み
    cube = SpectralCube.read(cube_file)
    
    # ノイズレベルの測定
    noise_region = cube[:, 50:100, 50:100]
    rms_noise = np.std(noise_region)
    
    # 分光線の検出
    moment0 = cube.moment0()  # 積分強度
    moment1 = cube.moment1()  # 重心速度
    moment2 = cube.moment2()  # 速度分散
    
    return moment0, moment1, moment2, rms_noise

def line_fitting(spectrum, frequency):
    """ガウシアンフィッティング"""
    
    from scipy.optimize import curve_fit
    
    def gaussian(x, amp, cen, wid):
        return amp * np.exp(-(x-cen)**2 / wid**2)
    
    # 初期推定値
    amp_guess = np.max(spectrum)
    cen_guess = frequency[np.argmax(spectrum)]
    wid_guess = np.std(frequency)
    
    # フィッティング実行
    popt, pcov = curve_fit(
        gaussian, frequency, spectrum,
        p0=[amp_guess, cen_guess, wid_guess]
    )
    
    return popt, pcov
```

### 画像解析
```python
def source_extraction(image_file):
    """天体の自動検出・測定"""
    
    from photutils import detect_sources, source_properties
    from astropy.stats import sigma_clipped_stats
    
    # FITS画像の読み込み
    hdu = fits.open(image_file)[0]
    data = hdu.data
    wcs = WCS(hdu.header)
    
    # バックグラウンド統計
    mean, median, std = sigma_clipped_stats(data, sigma=3.0)
    
    # ソースの検出（5σ閾値）
    threshold = median + (5.0 * std)
    sources = detect_sources(data, threshold, npixels=5)
    
    # ソースの物理量測定
    properties = source_properties(data, sources)
    
    # 結果の整理
    results = []
    for prop in properties:
        ra, dec = wcs.pixel_to_world(prop.centroid)
        results.append({
            'ra': ra.deg,
            'dec': dec.deg,
            'flux': prop.source_sum,
            'area': prop.area.value,
            'major_axis': prop.semimajor_sigma.value * 2.355  # FWHM
        })
    
    return results
```

## パフォーマンス最適化

### 並列処理
```python
import multiprocessing as mp
from concurrent.futures import ProcessPoolExecutor

def parallel_imaging(ms_list, nprocs=4):
    """複数のMSファイルを並列画像化"""
    
    with ProcessPoolExecutor(max_workers=nprocs) as executor:
        futures = [
            executor.submit(imaging_pipeline, msfile, f'image_{i}')
            for i, msfile in enumerate(ms_list)
        ]
        
        # 結果の取得
        results = [future.result() for future in futures]
    
    return results
```

### メモリ効率化
```python
def memory_efficient_processing(large_cube):
    """大きなデータキューブの効率的処理"""
    
    # チャンクごとに処理
    chunk_size = 100  # チャンネル数
    n_channels = large_cube.shape[0]
    
    results = []
    for start in range(0, n_channels, chunk_size):
        end = min(start + chunk_size, n_channels)
        chunk = large_cube[start:end, :, :]
        
        # チャンクの処理
        result = process_chunk(chunk)
        results.append(result)
        
        # メモリ解放
        del chunk
    
    return np.concatenate(results, axis=0)
```

## 品質管理とベストプラクティス

### 1. データ検証
```python
def quality_assessment(image_file):
    """画像品質の定量評価"""
    
    hdu = fits.open(image_file)[0]
    data = hdu.data
    
    # ダイナミックレンジ
    peak = np.max(data)
    rms = np.std(data)
    dynamic_range = peak / rms
    
    # ビーム品質
    beam = Beam.from_fits_header(hdu.header)
    beam_ratio = beam.major / beam.minor
    
    return {
        'dynamic_range': dynamic_range,
        'rms_noise': rms,
        'peak_brightness': peak,
        'beam_ratio': beam_ratio
    }
```

### 2. 再現性の確保
```python
import json
from datetime import datetime

def create_processing_log(parameters, output_file):
    """処理パラメータのログ作成"""
    
    log_data = {
        'timestamp': datetime.now().isoformat(),
        'casa_version': casa_tools.version_string(),
        'python_version': sys.version,
        'parameters': parameters,
        'git_commit': get_git_commit()  # バージョン管理
    }
    
    with open(output_file.replace('.fits', '_log.json'), 'w') as f:
        json.dump(log_data, f, indent=2)
```

## まとめ

電波天文学データ解析は、観測技術の進歩とともに急速に発展している分野です。CASAのような専用ツールとPythonの豊富なライブラリを組み合わせることで、効率的かつ高品質な解析が可能になります。

重要なポイントは：
- **標準化されたワークフロー**の確立
- **品質管理**の徹底
- **再現性**の確保
- **最新技術**への継続的な対応

これらの手法を習得することで、現代の電波天文学研究において重要な発見につながるデータ解析が可能となります。

---

*この記事で紹介したコードは、実際の研究プロジェクトでの使用例をもとに作成されています。最新のソフトウェアバージョンに応じて適宜修正してご使用ください。*