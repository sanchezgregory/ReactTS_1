import { useActionState } from "react";

// Definimos el tipo para nuestros datos del formulario
type FormData = {
    nick: string;
    subMonths: number;
    avatar: string;
    description: string;
    get: (key: string) => string;
  };
  
  // Definimos el tipo para nuestro estado
  type ActionState = {
    status: string | null;
    message: string;
  };

  interface FormState {
    status: 'success' | 'error' | null; // Permite 'success', 'error', o null
    message: string;
  }

  async function submitFormAction(previousState: ActionState, formData: FormData): Promise<FormState> {

    console.log('previousState:', previousState);
    console.log('Datos del formulario recibidos por la acción:', formData);

    const nick = formData.get('nick') as string;
    const subMonths = formData.get('subMonths') as unknown as number;
    const avatar = formData.get('avatar') as string;
    const description = formData.get('description') as string;
  
    // Validación simple
    if (!nick || !subMonths || !avatar || !description) {
      return { status: 'error', message: 'Todos los campos son obligatorios.' };
    }
  
    // Simula un retraso de red
    await new Promise(resolve => setTimeout(resolve, 1500));
  
    // Aquí normalmente enviarías los datos a tu backend
    console.log('Enviando datos:', { nick, subMonths, avatar, description });
  
    // Simula una respuesta exitosa del servidor
    return { status: 'success', message: `¡Gracias ${nick}, tu mensaje ha sido enviado!`};
  
    // Simula un error del servidor
    // return { status: 'error', message: 'Hubo un problema en el servidor. Inténtalo de nuevo.' };
  }

const Form: React.FC = () => {

  const initialState: FormState = {
    status: null, // puede ser 'success', 'error', o null
    message: '',
  };

  const [state, formAction, isPending] = useActionState(submitFormAction, initialState);

    return (
        <div className="p-4">
          
          {isPending && <p className="text-blue-500 mb-4">Enviando formulario...</p>}
          {state.status === 'error' && <p className="text-red-500 mb-4">Error: {state.message}</p>}
          {state.status === 'success' && <p className="text-green-500 mb-4">{state.message}</p>}
    
          <form action={formAction} className="space-y-4">
            <div>
              <input 
                type="text" 
                name="nick" 
                placeholder="Nick"
                className="w-full p-2 border rounded" 
              />
            </div>
            <div>
              <input 
                type="number" 
                name="subMonths" 
                placeholder="Sub Months"
                className="w-full p-2 border rounded" 
              />
            </div>
            <div>
              <input 
                type="text" 
                name="avatar" 
                placeholder="Avatar"
                className="w-full p-2 border rounded" 
              />
            </div>
            <div>
              <input 
                type="text" 
                name="description" 
                placeholder="Description"
                className="w-full p-2 border rounded" 
              />
            </div>
            <button 
              type="submit"
              disabled={isPending}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
            >
              {isPending ? 'Enviando...' : 'Submit'}
            </button>
          </form>
        </div>
      );
}

export default Form
