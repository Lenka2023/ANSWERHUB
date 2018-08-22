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

Route::get('/', "PostsController@index");

Route::get('posts/create',"PostsController@create");

Route::get('/posts/{post}', "PostsController@show");


/*Route::post('/post',"PostsController@store");
	/*
 * GET /posts
 * GET /posts/create
 * POST /posts
 * GET /posts/{id}/edit
 * PATCH /posts/{id}
 * GET /posts/{id}
 * DELETE /posts/{ID}
 */


//Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');*/
/*Route::get('/posts/{id}',function($id){
	$post=DB::table('posts')->find($id);
	//dd($post);
	//dd($id);
	return view('posts.show', compact('post')  );
});*/
/*Route::get('/', function () {
	
	$posts=DB::table('posts')->get();
	//dd($posts);

	//return $posts;
   return view('index', compact('posts'));
});

//Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');*/
/*Route::get('/posts/{id}',function($id){
	//$posts=DB::table('posts')->get();
	//dd($posts);
	$post=DB::table('posts')->find($id);
	 return view('posts.show', compact('post'));
	//dd($post);
	//dd($id);
	//dd("123");
});