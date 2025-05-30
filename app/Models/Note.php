<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    //
        protected $fillable = [
        'title',
        'content',
        'user_id', // include this if you're assigning the user on create
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
