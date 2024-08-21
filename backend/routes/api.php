<?php

use App\Http\Controllers\EmpleadoController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('obtener/{id}', [UsuarioController::class, 'showuser']);
Route::post('create', [UsuarioController::class, 'saveUser']);
Route::post('empleado', [EmpleadoController::class, 'saveEmpleado']);


