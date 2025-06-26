<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'full_name',
        'email',
        'phone',
        'address',
    ];

    public function orderDetails()
    {
        return $this->hasMany(OrderDetail::class);
    }
}
