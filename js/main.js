var app = {

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },

    findByName: function() {
        var self = this;
        console.log('findByName');
        this.store.findByName($('.search-key').val(), function(employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i=0; i<l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a class="employee" href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');

            }
        });
    },

    initialize: function() {
        var self = this;
        this.store = new MemoryStore(function() {
            //self.showAlert('Store Initialized', 'Info');
        });
        $('.search-key').on('keyup', $.proxy(this.findByName, this));

        $( ".employee-list" ).click(function() {
            //app.showAlert($(this).valueOf());
            app.showAlert("test");
        });

        $( "#button1" ).click(function() {
            //app.showAlert($(this).valueOf());
            app.showAlert("button1 clicked");
        });
    }


};

app.initialize();


//$('#button1').on('click', app.showAlert('button1'));
//app.showAlert('a');