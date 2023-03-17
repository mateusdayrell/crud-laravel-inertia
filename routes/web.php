<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\PdfController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Post/index', []);
// });

// Route::resource('/', PostController::class);
Route::resource('/posts', PostController::class);
Route::resource('/comments', CommentController::class);
Route::post('/posts/{post}/comments', [PostController::class, 'comment'])->name("posts.comments");

Route::get('/mail', [MailController::class, 'sendMail'])->name("mail.sendMail");
Route::get('/pdf', [PdfController::class, 'posts'])->name("pdf.posts");
