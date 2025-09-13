---
title: "Pythonで始める科学計算 - NumPy・SciPy・Matplotlibを使いこなす"
date: "2025-01-07"
excerpt: "科学研究におけるPythonの活用法を基礎から応用まで解説。データ解析、数値計算、可視化の実践的なテクニックを紹介します。"
category: "technology"
tags: ["Python", "NumPy", "SciPy", "Matplotlib", "データ解析", "科学計算"]
author: "中村桃太朗"
published: false
---

# Pythonで始める科学計算 - NumPy・SciPy・Matplotlibを使いこなす

## はじめに

現代の科学研究において、Pythonは不可欠なツールとなっています。その理由は、豊富な科学計算ライブラリ、読みやすいコード、そして活発なコミュニティにあります。本記事では、科学研究に必要なPythonスキルを実践的に解説します。

## 環境構築

### Anacondaによる環境管理
```bash
# Anacondaのインストール後、専用環境を作成
conda create -n scientific-python python=3.11
conda activate scientific-python

# 必要なパッケージのインストール
conda install numpy scipy matplotlib pandas jupyter
conda install astropy scikit-image scikit-learn
pip install plotly seaborn
```

### 必須ライブラリの確認
```python
import numpy as np
import scipy as sp
import matplotlib.pyplot as plt
import pandas as pd

# バージョン確認
print(f"NumPy: {np.__version__}")
print(f"SciPy: {sp.__version__}")
print(f"Matplotlib: {matplotlib.__version__}")
print(f"Pandas: {pd.__version__}")
```

## NumPy - 効率的な数値計算の基礎

### 配列操作の基本
```python
import numpy as np

# 配列の作成
data = np.array([1, 2, 3, 4, 5])
matrix = np.array([[1, 2], [3, 4], [5, 6]])

# 特殊な配列の生成
zeros = np.zeros((3, 4))  # ゼロ配列
ones = np.ones((2, 3))    # 1で埋めた配列
identity = np.eye(3)      # 単位行列
random_data = np.random.normal(0, 1, (100, 50))  # 正規分布

# 線形空間の生成
x = np.linspace(0, 10, 100)  # 0から10まで100点
y = np.arange(0, 10, 0.1)    # 0から10まで0.1刻み
```

### 高度な配列操作
```python
# 多次元配列の操作
data_3d = np.random.random((10, 20, 30))

# 軸の指定による操作
mean_along_axis0 = np.mean(data_3d, axis=0)  # (20, 30)
mean_along_axis1 = np.mean(data_3d, axis=1)  # (10, 30)

# ブロードキャスティング
a = np.array([[1], [2], [3]])  # (3, 1)
b = np.array([10, 20, 30])     # (3,)
result = a + b  # (3, 3) - 自動的に形状が拡張される

# 条件による要素選択
data = np.random.normal(0, 1, 1000)
positive_values = data[data > 0]
outliers = data[np.abs(data) > 2]
```

### 科学計算でよく使う関数
```python
# 統計関数
data = np.random.normal(100, 15, 1000)
mean = np.mean(data)
std = np.std(data)
median = np.median(data)
percentile_95 = np.percentile(data, 95)

# 線形代数
A = np.random.random((5, 5))
B = np.random.random((5, 3))

# 行列積
C = np.dot(A, B)  # または A @ B

# 固有値・固有ベクトル
eigenvals, eigenvecs = np.linalg.eig(A)

# 逆行列
A_inv = np.linalg.inv(A)

# 連立方程式の解 (Ax = b)
b = np.random.random(5)
x = np.linalg.solve(A, b)
```

## SciPy - 専門的な科学計算

### 数値積分
```python
from scipy import integrate
import numpy as np

# 1次元積分
def gaussian(x):
    return np.exp(-x**2)

# 定積分 ∫_{-∞}^{∞} e^(-x²) dx = √π
result, error = integrate.quad(gaussian, -np.inf, np.inf)
print(f"積分結果: {result:.6f}, 誤差: {error:.2e}")
print(f"理論値: {np.sqrt(np.pi):.6f}")

# 多次元積分
def multi_gaussian(x, y):
    return np.exp(-(x**2 + y**2))

# 2次元積分
result_2d, error_2d = integrate.dblquad(
    multi_gaussian, -2, 2, lambda x: -2, lambda x: 2
)
```

### 最適化
```python
from scipy import optimize

# 関数の最小値を求める
def objective_function(x):
    return x**2 + 10*np.sin(x)

# 局所最小値
result = optimize.minimize_scalar(objective_function, bounds=(-10, 10), method='bounded')
print(f"最小値: {result.fun:.6f}, 最小点: {result.x:.6f}")

# 多次元最適化
def rosenbrock(x):
    """Rosenbrock関数（最適化のベンチマーク）"""
    return sum(100.0*(x[1:]-x[:-1]**2.0)**2.0 + (1-x[:-1])**2.0)

# 初期値
x0 = np.array([1.3, 0.7, 0.8, 1.9, 1.2])

# 最適化実行
result = optimize.minimize(rosenbrock, x0, method='BFGS')
print(f"最適化結果: {result.x}")
print(f"最小値: {result.fun}")
```

### 信号処理
```python
from scipy import signal
import matplotlib.pyplot as plt

# サンプル信号の生成
fs = 1000  # サンプリング周波数
t = np.linspace(0, 1, fs, False)

# 複合信号（50Hz + 120Hz + ノイズ）
signal_clean = np.sin(2*np.pi*50*t) + 0.5*np.sin(2*np.pi*120*t)
noise = 0.3*np.random.random(len(t))
signal_noisy = signal_clean + noise

# フィルタ設計（バンドパスフィルタ）
low_freq = 40   # 低域カットオフ
high_freq = 70  # 高域カットオフ
b, a = signal.butter(4, [low_freq, high_freq], btype='band', fs=fs)

# フィルタ適用
filtered_signal = signal.filtfilt(b, a, signal_noisy)

# フーリエ変換による周波数解析
frequencies, power_spectrum = signal.welch(signal_noisy, fs, nperseg=512)
```

### 統計解析
```python
from scipy import stats

# サンプルデータの生成
np.random.seed(42)
group1 = np.random.normal(100, 15, 50)
group2 = np.random.normal(110, 12, 45)

# 正規性の検定
stat1, p1 = stats.shapiro(group1)
stat2, p2 = stats.shapiro(group2)

print(f"Group 1 正規性検定: p-value = {p1:.4f}")
print(f"Group 2 正規性検定: p-value = {p2:.4f}")

# 等分散性の検定
stat_var, p_var = stats.levene(group1, group2)
print(f"等分散性検定: p-value = {p_var:.4f}")

# 平均値の差の検定（t検定）
if p_var > 0.05:  # 等分散
    stat_t, p_t = stats.ttest_ind(group1, group2)
else:  # 不等分散
    stat_t, p_t = stats.ttest_ind(group1, group2, equal_var=False)

print(f"t検定: t = {stat_t:.4f}, p-value = {p_t:.4f}")

# 効果量（Cohen's d）の計算
pooled_std = np.sqrt(((len(group1)-1)*np.var(group1) + (len(group2)-1)*np.var(group2)) / 
                     (len(group1)+len(group2)-2))
cohens_d = (np.mean(group2) - np.mean(group1)) / pooled_std
print(f"Cohen's d: {cohens_d:.4f}")
```

## Matplotlib - 科学的可視化

### 基本的なプロット
```python
import matplotlib.pyplot as plt
import numpy as np

# 日本語フォントの設定
plt.rcParams['font.family'] = 'DejaVu Sans'
plt.rcParams['figure.figsize'] = (10, 6)

# データの準備
x = np.linspace(0, 2*np.pi, 100)
y1 = np.sin(x)
y2 = np.cos(x)
y3 = np.sin(x) * np.cos(x)

# 複数のプロット
fig, ax = plt.subplots()

ax.plot(x, y1, 'b-', label='sin(x)', linewidth=2)
ax.plot(x, y2, 'r--', label='cos(x)', linewidth=2)
ax.plot(x, y3, 'g:', label='sin(x)cos(x)', linewidth=2)

ax.set_xlabel('x [rad]')
ax.set_ylabel('y')
ax.set_title('Trigonometric Functions')
ax.legend()
ax.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()
```

### 科学論文用の高品質図
```python
# 論文用スタイルの設定
plt.style.use('seaborn-v0_8-whitegrid')
plt.rcParams['figure.dpi'] = 300
plt.rcParams['savefig.dpi'] = 300
plt.rcParams['font.size'] = 12

# サブプロットの作成
fig, ((ax1, ax2), (ax3, ax4)) = plt.subplots(2, 2, figsize=(12, 8))

# 散布図（相関関係の可視化）
x = np.random.normal(0, 1, 100)
y = 2*x + np.random.normal(0, 0.5, 100)
ax1.scatter(x, y, alpha=0.6, color='navy')
ax1.set_xlabel('Variable X')
ax1.set_ylabel('Variable Y')
ax1.set_title('Correlation Analysis')

# ヒストグラム（分布の可視化）
data = np.random.normal(100, 15, 1000)
ax2.hist(data, bins=30, alpha=0.7, color='forestgreen', density=True)
ax2.axvline(np.mean(data), color='red', linestyle='--', label=f'Mean: {np.mean(data):.1f}')
ax2.set_xlabel('Value')
ax2.set_ylabel('Density')
ax2.set_title('Distribution Analysis')
ax2.legend()

# エラーバー付きプロット
x = np.arange(1, 6)
y = [20, 35, 30, 35, 27]
yerr = [2, 3, 4, 1, 2]
ax3.errorbar(x, y, yerr=yerr, fmt='o-', capsize=5, capthick=2)
ax3.set_xlabel('Condition')
ax3.set_ylabel('Response')
ax3.set_title('Experimental Results')

# 2D色マップ
X, Y = np.meshgrid(np.linspace(-2, 2, 100), np.linspace(-2, 2, 100))
Z = np.exp(-(X**2 + Y**2))
im = ax4.contourf(X, Y, Z, levels=20, cmap='viridis')
ax4.set_xlabel('X')
ax4.set_ylabel('Y')
ax4.set_title('2D Gaussian')
plt.colorbar(im, ax=ax4, label='Intensity')

plt.tight_layout()
plt.savefig('scientific_plots.png', dpi=300, bbox_inches='tight')
plt.show()
```

### 3D可視化
```python
from mpl_toolkits.mplot3d import Axes3D

# 3Dデータの準備
fig = plt.figure(figsize=(12, 5))

# 3D散布図
ax1 = fig.add_subplot(121, projection='3d')
n = 100
xs = np.random.normal(0, 1, n)
ys = np.random.normal(0, 1, n)
zs = xs**2 + ys**2 + np.random.normal(0, 0.1, n)

scatter = ax1.scatter(xs, ys, zs, c=zs, cmap='plasma', alpha=0.6)
ax1.set_xlabel('X')
ax1.set_ylabel('Y')
ax1.set_zlabel('Z')
ax1.set_title('3D Scatter Plot')
plt.colorbar(scatter, ax=ax1, shrink=0.8)

# 3D表面プロット
ax2 = fig.add_subplot(122, projection='3d')
X, Y = np.meshgrid(np.linspace(-3, 3, 50), np.linspace(-3, 3, 50))
Z = np.sin(np.sqrt(X**2 + Y**2))

surface = ax2.plot_surface(X, Y, Z, cmap='coolwarm', alpha=0.8)
ax2.set_xlabel('X')
ax2.set_ylabel('Y')
ax2.set_zlabel('Z')
ax2.set_title('3D Surface Plot')

plt.tight_layout()
plt.show()
```

## 実践的な科学計算例

### データフィッティング
```python
# 実験データの例（指数減衰）
def exponential_decay(t, A, tau, b):
    return A * np.exp(-t/tau) + b

# 「実験」データの生成（ノイズ付き）
np.random.seed(42)
t_data = np.linspace(0, 10, 50)
y_true = exponential_decay(t_data, 100, 2.5, 10)
y_data = y_true + np.random.normal(0, 5, len(t_data))

# カーブフィッティング
from scipy.optimize import curve_fit

# 初期推定値
initial_guess = [90, 3, 5]

# フィッティング実行
popt, pcov = curve_fit(exponential_decay, t_data, y_data, p0=initial_guess)

# 結果の表示
A_fit, tau_fit, b_fit = popt
print(f"フィッティング結果:")
print(f"A = {A_fit:.2f} ± {np.sqrt(pcov[0,0]):.2f}")
print(f"τ = {tau_fit:.2f} ± {np.sqrt(pcov[1,1]):.2f}")
print(f"b = {b_fit:.2f} ± {np.sqrt(pcov[2,2]):.2f}")

# 結果の可視化
t_fit = np.linspace(0, 10, 200)
y_fit = exponential_decay(t_fit, *popt)

plt.figure(figsize=(10, 6))
plt.plot(t_data, y_data, 'bo', label='Experimental data', alpha=0.6)
plt.plot(t_fit, y_fit, 'r-', label=f'Fitted curve (τ={tau_fit:.2f})', linewidth=2)
plt.xlabel('Time')
plt.ylabel('Signal')
plt.title('Exponential Decay Fitting')
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()

# 残差分析
residuals = y_data - exponential_decay(t_data, *popt)
plt.figure(figsize=(10, 4))
plt.subplot(1, 2, 1)
plt.plot(t_data, residuals, 'ro')
plt.axhline(y=0, color='k', linestyle='--')
plt.xlabel('Time')
plt.ylabel('Residuals')
plt.title('Residual Plot')

plt.subplot(1, 2, 2)
plt.hist(residuals, bins=15, alpha=0.7)
plt.xlabel('Residual Value')
plt.ylabel('Frequency')
plt.title('Residual Distribution')
plt.tight_layout()
plt.show()
```

### 画像処理の例
```python
from scipy import ndimage
import matplotlib.pyplot as plt

# サンプル画像の作成（ガウシアンスポット + ノイズ）
def create_sample_image():
    x, y = np.mgrid[0:100, 0:100]
    
    # 複数のガウシアンスポット
    centers = [(20, 30), (70, 40), (50, 80)]
    amplitudes = [100, 80, 120]
    sigmas = [8, 6, 10]
    
    image = np.zeros((100, 100))
    for center, amp, sigma in zip(centers, amplitudes, sigmas):
        gaussian = amp * np.exp(-((x-center[0])**2 + (y-center[1])**2) / (2*sigma**2))
        image += gaussian
    
    # ノイズを追加
    noise = np.random.normal(0, 10, image.shape)
    image += noise
    
    return image

# 画像処理パイプライン
original_image = create_sample_image()

# ノイズ除去（ガウシアンフィルタ）
smoothed = ndimage.gaussian_filter(original_image, sigma=2)

# エッジ検出（Sobelフィルタ）
edge_x = ndimage.sobel(smoothed, axis=0)
edge_y = ndimage.sobel(smoothed, axis=1)
edges = np.sqrt(edge_x**2 + edge_y**2)

# 閾値処理
threshold = np.percentile(original_image, 80)
binary = original_image > threshold

# ラベリング（連結成分解析）
labeled, n_objects = ndimage.label(binary)

# 結果の可視化
fig, axes = plt.subplots(2, 3, figsize=(15, 10))

# 元画像
im1 = axes[0, 0].imshow(original_image, cmap='viridis')
axes[0, 0].set_title('Original Image')
axes[0, 0].set_axis_off()
plt.colorbar(im1, ax=axes[0, 0])

# 平滑化
im2 = axes[0, 1].imshow(smoothed, cmap='viridis')
axes[0, 1].set_title('Smoothed')
axes[0, 1].set_axis_off()
plt.colorbar(im2, ax=axes[0, 1])

# エッジ検出
im3 = axes[0, 2].imshow(edges, cmap='gray')
axes[0, 2].set_title('Edge Detection')
axes[0, 2].set_axis_off()
plt.colorbar(im3, ax=axes[0, 2])

# 二値化
axes[1, 0].imshow(binary, cmap='gray')
axes[1, 0].set_title('Thresholded')
axes[1, 0].set_axis_off()

# ラベル画像
im5 = axes[1, 1].imshow(labeled, cmap='tab10')
axes[1, 1].set_title(f'Labeled Objects (n={n_objects})')
axes[1, 1].set_axis_off()
plt.colorbar(im5, ax=axes[1, 1])

# プロファイル
profile = original_image[50, :]
axes[1, 2].plot(profile, 'b-', label='Original')
axes[1, 2].plot(smoothed[50, :], 'r-', label='Smoothed')
axes[1, 2].axhline(y=threshold, color='g', linestyle='--', label='Threshold')
axes[1, 2].set_xlabel('Pixel Position')
axes[1, 2].set_ylabel('Intensity')
axes[1, 2].set_title('Cross Section (row 50)')
axes[1, 2].legend()

plt.tight_layout()
plt.show()
```

## パフォーマンス最適化

### NumPyの効率的な使用法
```python
import time

# 効率的でない方法（Pythonループ）
def slow_sum_of_squares(arr):
    result = 0
    for x in arr:
        result += x**2
    return result

# 効率的な方法（ベクトル化）
def fast_sum_of_squares(arr):
    return np.sum(arr**2)

# 性能比較
arr = np.random.random(1000000)

start_time = time.time()
slow_result = slow_sum_of_squares(arr)
slow_time = time.time() - start_time

start_time = time.time()
fast_result = fast_sum_of_squares(arr)
fast_time = time.time() - start_time

print(f"Slow method: {slow_time:.4f}s")
print(f"Fast method: {fast_time:.4f}s")
print(f"Speedup: {slow_time/fast_time:.1f}x")
```

### メモリ効率的な処理
```python
# 大きなデータセットの処理
def process_large_dataset_efficiently(data_generator, chunk_size=10000):
    """
    メモリ効率的なデータ処理
    """
    results = []
    
    for chunk in data_generator:
        # チャンクごとに処理
        processed_chunk = np.sqrt(chunk**2 + 1)  # 例：何らかの計算
        
        # 統計量のみを保存（全データを保持しない）
        chunk_stats = {
            'mean': np.mean(processed_chunk),
            'std': np.std(processed_chunk),
            'min': np.min(processed_chunk),
            'max': np.max(processed_chunk)
        }
        results.append(chunk_stats)
    
    return results

# データジェネレータの例
def data_chunks(total_size, chunk_size):
    """大きなデータセットをチャンクごとに生成"""
    for start in range(0, total_size, chunk_size):
        end = min(start + chunk_size, total_size)
        yield np.random.random(end - start)

# 使用例
chunk_results = process_large_dataset_efficiently(
    data_chunks(1000000, 50000), 
    chunk_size=50000
)
```

## まとめ

Pythonの科学計算ライブラリを効果的に使用することで、研究の生産性を大幅に向上させることができます。重要なポイントは：

1. **NumPy** - 効率的な配列操作とベクトル化
2. **SciPy** - 専門的な科学計算機能
3. **Matplotlib** - 高品質な科学的可視化
4. **パフォーマンス** - ベクトル化とメモリ効率

これらのツールを習得することで、データ解析から数値シミュレーションまで、幅広い科学計算を効率的に実行できるようになります。

---

*この記事のサンプルコードは、実際の研究プロジェクトでの使用経験をもとに作成されています。最新のライブラリバージョンについては公式ドキュメントをご確認ください。*