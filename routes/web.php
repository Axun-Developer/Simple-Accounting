<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('admin.dashboard');
});

Route::group(['prefix' => 'admin', 'as' => 'admin.'], function () {
    includeRouteFiles(__DIR__.'/admin/');
});
