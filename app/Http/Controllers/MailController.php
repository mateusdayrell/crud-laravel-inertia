<?php

namespace App\Http\Controllers;

use App\Mail\Welcome;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function sendMail()
    {
        $name = 'Mateus';
        Mail::to('mateus@email.com')->send(new Welcome($name));
        return view('welcome');
    }
}
