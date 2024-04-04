"use client";
import Swal from 'sweetalert2';

export const addProduct = (product, add) => {
    add(product);
    Swal.fire({
        title: "Custom animation with Animate.css",
        imageWidth: 300,
        imageHeight: 300,
        showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
    });
};