import { FormControl } from "@angular/forms";

export const cantBePertierra = (control: FormControl) => {
    const value: string = control.value.trim().toLowerCase();

    //Regresar el error
    if (value === 'pertierra') {
        return {
            noPertierra: true
        }
    }
    
    return null;
}