import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Recipes() {
    const [recipes, setRecipes] = useState ([]);
    const [loading, setLoading] = useState (true);

    const navigate = useNavigate ();

    useEffect (() => {
        async function fetchRecipes () {
            try {
                const response = await fetch ('https://dummyjson.com/recipes');
                const data = await response.json ();
                setRecipes (data.recipes); 
            } catch (error) {
                console.error ('Fejl ved hentning af opskrifter:', error)
            }
        }
    })
}