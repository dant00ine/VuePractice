// app/assets/javascripts/employees.js

var employees = new Vue({
  el: '#employees',
  data: {
    employees: [],
    employee: {
        name: '',
        email: '',
        manager: false
    },
    errors: {}
  },
  methods: {
      hireEmployee: function() {
          $.ajax({
              method: 'POST',
              data: {
                  employee: this.employee
              },
              url: '/employees.json',
              success: (res) => {
                  this.errors = {}
                  this.employees.push(res)
              },
              error: (res) => {
                  this.errors = res.responseJSON.errors
              }
          })
      }
  },
  mounted: function() {
    $.ajax({
      url: '/employees.json',
      success: (res) => {
        this.employees = res;
      }
    });
  }
});
