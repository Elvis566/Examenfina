<?php

namespace App\Http\Controllers;

use App\Models\Empleado;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class EmpleadoController extends Controller
{
    //

    public function saveEmpleado(Request $request){
        
        $empleado = new Empleado;

        $foto = $request->file('foto');
        $file=time().$foto->getClientOriginalName();
        Storage::disk('personas')->put($file, file_get_contents($foto));
        $empleado->nombre = $request->nombre;
        $empleado->apellido = $request->apellido;
        $empleado->CI = $request->CI;
        $empleado->nFoto = $request->nFoto;
        $empleado->foto = $file;
        $empleado->puesto = $request->puesto;
        $empleado->latitud = $request->latitud;
        $empleado->longitud = $request->longitud;

        $empleado->save();

        return response()->json(['message' => 'Datos guardados correctamente']);
        
    }

    public function busqueda(Request $request){
        
    }
}
