<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::get('project','Api\ProjectController@index');
Route::post('project/store','Api\ProjectController@store');
Route::delete('project/delete/{id}','Api\ProjectController@destroy');
Route::get('project/edit/{id}','Api\ProjectController@edit');
Route::put('project/update/{id}','Api\ProjectController@update');



