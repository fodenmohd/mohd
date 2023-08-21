import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router module
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private router: Router) {} // Inject the Router

  logout() {
    // Show a confirmation dialog before logging out
    Swal.fire({
      title: 'Confirm',
      text: 'Are you sure you want to Log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    }).then(result => {
      if (result.isConfirmed) {
        this.performLogout();
      }
    });
  }

  performLogout() {
    // Simulate a logout process
    setTimeout(() => {
      console.log('Logged out successfully.');
      Swal.fire({
        title: 'Success!',
        text: 'Logged out successfully.',
        icon: 'success'
      });

      // After successful logout, navigate to the login page
      this.router.navigate(['']); // Replace 'login' with the actual route path for your login page
    }, 1000); // Simulate a delay for demonstration purposes
  }
}








// import { Component } from '@angular/core';
// import Swal from 'sweetalert2';



// @Component({
//   selector: 'app-nav-bar',
//   templateUrl: './nav-bar.component.html',
//   styleUrls: ['./nav-bar.component.css']
// })
// export class NavBarComponent {

// }



// // futa(id: number) {
//   // Show a confirmation dialog before deleting
//   Swal.fire({
//     title: 'Confirm',
//     text: 'Are you sure you want to Log out?',
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonText: 'Yes',
//     cancelButtonText: 'Cancel'
//   }).then(result => {
//     if (result.isConfirmed) {

//       this. NavBarComponent.NavBarComponent().subscribe(
//         (        response: any) => {
//           console.log(response);
//           Swal.fire({
//             title: 'Success!',
//             text: 'Item deleted successfully.',
//             icon: 'success'
//           });
//           gthisetAll();
//         },
//         (        error: any) => {
//           Swal.fire({
//             title: 'Error!',
//             text: 'Failed to Log out.',
//             icon: 'error'
//           });
//         }
//       );
//     }
//   });



// function gthisetAll() {
//   throw new Error('Function not implemented.');
// }

