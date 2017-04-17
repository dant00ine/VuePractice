Vue.component('employee-row', {
    template: '#employee-row',
    props: {
        employee: Object
    },
    data: function(){
        return {
            editMode: false,
            errors: {}
        }
    },
    methods: {
        toggleManagerStatus: function(){
            this.employee.manager = !this.employee.manager
            this.updateEmployee()
        },
        updateEmployee: function(){
            $.ajax({
                method: 'PUT',
                data: {
                    employee: this.employee
                },
                url: `/employees/${this.employee.id}.json`,
                success: (res) => {
                    this.errors = {}
                    this.employee = res
                    this.editMode = false
                },
                error: (res) => {
                    console.log(`here's res: ${JSON.stringify(res)}`);
                    this.errors = res.responseJSON.errors
                }
            })
        }
    }
})
