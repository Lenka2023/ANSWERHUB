<?php

use Illuminate\Database\Seeder;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('posts')->insert(
array(
	[
		'title'=>"Php is awersome",
		'intro'=>"Sed ut perspiciatis, unde omnis iste natus error ",
		'body'=>" Et harum quidem rerum facilis est et expedita distinctio."
	],
	[
		'title'=>"Laravel 5.4",
		'intro'=>"Sed ut perspiciatis, unde omnis iste natus error ",
		'body'=>" Et harum quidem rerum facilis est et expedita distinctio."
	],
	[
		'title'=>"Thank to seed",
		'intro'=>"Sed ut perspiciatis, unde omnis iste natus error ",
		'body'=>" Et harum quidem rerum facilis est et expedita distinctio."
	],
                        )
                    );
                 }
              }
