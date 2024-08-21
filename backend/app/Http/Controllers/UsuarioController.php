<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    //

    public function saveUser(Request $request){
        $user = Usuario::create([
            'email' => $request->email,
            'password' => $request->password
        ]);

        if(!$user){
        return response()->json(['message'=>'no create user']);
        }

        return response()->json(['message'=>'creado user']);
    }

    public function showuser($id){
        $user = Usuario::find($id);

        if(!$user){
            return response()->json(['message'=>'not found']);
        }

        return response()->json(['user'=>$user]);

    }
}
