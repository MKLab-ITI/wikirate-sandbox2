$(document).ready(function() {

    $('.ui.dropdown')
      .dropdown()
    ;

    $('.ui.accordion')
      .accordion()
    ;

    var validationRules = {
        company: {
          identifier  : 'company',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please type a company name'
            },
          ]
        },
        topic: {
          identifier  : 'topic',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please type a topic'
            },
          ]
        }

      }
    ;

    $('.ui.form')
      .form(validationRules, {
        inline: true,
        on: 'blur'
      })
    ;

    $('.masthead .information')
      .transition('scale in')
    ;

});