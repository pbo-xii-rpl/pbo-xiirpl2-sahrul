function Button({children}) {

   return {
       <a className="border px-10 py-2 font-semibold text-lg border-yellow-300 rounder-full text-yellow-300">
        {children}
      </a>  
   };
}
expot default Button;