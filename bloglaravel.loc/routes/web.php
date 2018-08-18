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
	
	$posts=DB::table('posts')->get();
	//dd($posts);
	//return $posts;
   return view('index', compact('posts')  );
});

//Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');
Route::get('/posts/{id}',function($id){
	$post=DB::table('posts')->find($id);
	dd($post);
	//dd($id);
});
