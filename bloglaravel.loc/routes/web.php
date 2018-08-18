<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
	$posts=array(
	[
		'id'=>1,
		'title'=>"Php is awersome",
		'intro'=>"Sed ut perspiciatis, unde omnis iste natus error ",
		'body'=>" Et harum quidem rerum facilis est et expedita distinctio."
	],
	[
		'id'=>1,
		'title'=>"Laravel 5.4",
		'intro'=>"Sed ut perspiciatis, unde omnis iste natus error ",
		'body'=>" Et harum quidem rerum facilis est et expedita distinctio."
	],
	
                        );
	$posts=DB::table('posts')->get();
	return $posts;
   // return view('index', compact('posts')  );
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
