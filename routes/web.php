<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Тут ви можете зареєструвати веб-маршрути для своєї програми. Ці
| маршрути завантажуються RouteServiceProvider, і всі вони будуть
| бути призначеним до групи проміжного програмного забезпечення "web".
|
*/


// Маршрут для головної сторінки сайту.
Route::view('/', 'welcome');