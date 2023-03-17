<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;

class PdfController extends Controller
{
    public function posts()
    {
        $posts = Post::all();
        $pdf = Pdf::loadView('pdf.posts', ['posts' => $posts]);
        return $pdf->stream();
    }
}
