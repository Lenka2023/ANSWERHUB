@extends('layouts.layout')

@section('content')
    <div class="row">
        @foreach($posts as $post)

                <div class="col-md-4">
                    <h2>{{ $post['title'] }}</h2>
                    <p>{{ $post['intro'] }}</p>
                    
                </div>

        @endforeach
    </div>

@endsection
