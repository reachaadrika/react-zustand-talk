import React from 'react';
import { useQuery } from '@tanstack/react-query';

import axios from 'axios'
export const useFetchProducts = () =>{
   return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await axios.get('https://dummyjson.com/products');
      return response.data.products;
    },
  });

}