<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Post;
class PostsController extends Controller
{
    public function index()
    {
       // $posts = Post::all();
    	$posts=DB::table('posts')->get();
	    return view('index', compact('posts'));
    }
    public function show(/*Post $post*/$id)
    {
    	$post=DB::table('posts')->find($id);
	
       //$post= Post::find($id);
        return view('posts.show', compact('post'));
    }
    public function create()
    {
        return view("posts.create");
    }
	public function store()
	    {
		dd(request()->all());
	    }


}
