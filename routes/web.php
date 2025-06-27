<?php

use App\Http\Controllers\TransactionController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Rute ini akan menangkap SEMUA permintaan web dan menyerahkannya
| ke view 'app.blade.php'. Dari sana, React Router akan mengambil alih.
|
*/

Route::post('/transaction', [TransactionController::class, 'transaction'])->name('transaction');

Route::get('/{any?}', function () {
    return view('app');
})->where('any', '.*');
