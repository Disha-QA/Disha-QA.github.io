describe('Покупка Аватара', function () {

     it('Покупка Аватара', function () {
        cy.visit('https://pokemonbattle.ru//'); // перешла на сайт

        cy.get('.style_1_popup_white_title').should('be.visible'); // проверила надпись Битва покемонов
        cy.get('.auth_content_text').should('be.visible');// проверила надпись
        cy.get('[href="https://id.vk.com/auth?uuid=GBFBV2654u2jhtrRTJS45jw6435454yyt3y4d2354&app_id=51935122&response_type=silent_token&redirect_uri=https://api.pokemonbattle.ru/v2/technical_routes/callback_vk"] > .auth_content_social_icon').should('be.visible');
        cy.get('[href="https://oauth.yandex.ru/authorize?response_type=code&client_id=b571e48acdb74d569e1a2284114ced87&redirect_uri=https://api.pokemonbattle.ru/v2/technical_routes/callback_yandex"] > .auth_content_social_icon').should('be.visible');
        cy.get('.style_fix_1').should('be.visible');// проверила надпись
        cy.get('.style_fix_1').should('be.visible');// проверила надпись
        cy.get('.MuiButton-root').should('have.css', 'background-color', 'rgb(237, 111, 45)');// проверила цвет кнопки войти

        cy.get('#k_email').click().type('Di-sha10@yandex.ru'); // ввела верный логин
        cy.get('#k_password').type('Di1010888@'); // ввела верный пароль
        cy.get('.MuiButton-root').click();

        cy.get('.header_card_trainer_id_num').click() // захожу в личный кабинет тренера
        cy.get('[data-qa="shop"] > .k_trainer_in_button_wrapper > .k_trainer_in_button_title_no_desc').click() // сменить аватар
        cy.get('.available > button').first().click()
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('5124585563456201')
        cy.get(':nth-child(1) > .style_1_base_input').type('0327')
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125')
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('Di Nag')
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click()
        cy.get('.style_1_base_input').type('56456')
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click()
        cy.get('.payment_status_top_title').contains('Покупка прошла успешно').should('be.visible'); // Надпись Покп.успех
        cy.get('.style_1_base_link_blue').should('be.visible');// наличие ссылки Вернуться в магазин






        })
})