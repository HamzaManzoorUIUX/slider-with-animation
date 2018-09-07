        var Notification = "Notification !";
        var added_to_wishlist = "The product was successfully added to your wishlist.";
        var baseDir = "index.html\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/";
        var baseUri = "index.html\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/";
        var caption = "Thank you for leaving the review.";
        var comparator_max_item = 5;
        var compare_add_text = "The product has been added to list compare";
        var compare_button = "Go to Compare";
        var compare_remove_text = "The product was successfully removed from list compare";
        var compare_success = "Product successfully removed from the product comparison!";
        var compare_text = "Product successfully added to the product comparison!";
        var compare_title = "Compare list updated!";
        var compare_title_error = "Warning!";
        var compare_title_success = "Compare list updated!";
        var comparedProductsIds = [];
        var compared_products = [];
        var contentOnly = true;
        var error_send_email = "Please fill out the required fields.";
        var fieldbs_autoscroll = false;
        var fieldbs_maxitem = "6";
        var fieldbs_minitem = "4";
        var fieldbs_navigation = false;
        var fieldbs_pagination = false;
        var fieldbs_pauseonhover = false;
        var isLogged = false;
        var loggin_required = "You must be logged in to manage your wishlist";
        var myaccout_url = "index.html\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/my-account";
        var mywishlist_url =
            "index.html\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/module\/fieldblockwishlist\/mywishlist";
        var prestashop = {
            "cart": {
                "products": [],
                "totals": {
                    "total": {
                        "type": "total",
                        "label": "Total",
                        "amount": 0,
                        "value": "$0.00"
                    },
                    "total_including_tax": {
                        "type": "total",
                        "label": "Total (tax incl.)",
                        "amount": 0,
                        "value": "$0.00"
                    },
                    "total_excluding_tax": {
                        "type": "total",
                        "label": "Total (tax excl.)",
                        "amount": 0,
                        "value": "$0.00"
                    }
                },
                "subtotals": {
                    "products": {
                        "type": "products",
                        "label": "Subtotal",
                        "amount": 0,
                        "value": "$0.00"
                    },
                    "discounts": null,
                    "shipping": {
                        "type": "shipping",
                        "label": "Shipping",
                        "amount": 0,
                        "value": "Free"
                    },
                    "tax": {
                        "type": "tax",
                        "label": "Taxes",
                        "amount": 0,
                        "value": "$0.00"
                    }
                },
                "products_count": 0,
                "summary_string": "0 items",
                "labels": {
                    "tax_short": "(tax excl.)",
                    "tax_long": "(tax excluded)"
                },
                "id_address_delivery": 0,
                "id_address_invoice": 0,
                "is_virtual": false,
                "vouchers": {
                    "allowed": 0,
                    "added": []
                },
                "discounts": [],
                "minimalPurchase": 0,
                "minimalPurchaseRequired": ""
            },
            "currency": {
                "name": "US Dollar",
                "iso_code": "USD",
                "iso_code_num": "840",
                "sign": "$"
            },
            "customer": {
                "lastname": null,
                "firstname": null,
                "email": null,
                "last_passwd_gen": null,
                "birthday": null,
                "newsletter": null,
                "newsletter_date_add": null,
                "ip_registration_newsletter": null,
                "optin": null,
                "website": null,
                "company": null,
                "siret": null,
                "ape": null,
                "outstanding_allow_amount": 0,
                "max_payment_days": 0,
                "note": null,
                "is_guest": 0,
                "id_shop": null,
                "id_shop_group": null,
                "id_default_group": 1,
                "date_add": null,
                "date_upd": null,
                "reset_password_token": null,
                "reset_password_validity": null,
                "id": null,
                "is_logged": false,
                "gender": {
                    "type": null,
                    "name": null,
                    "id": null
                },
                "risk": {
                    "name": null,
                    "color": null,
                    "percent": null,
                    "id": null
                },
                "addresses": []
            },
            "language": {
                "name": "English (English)",
                "iso_code": "en",
                "locale": "en-US",
                "language_code": "en-us",
                "is_rtl": "0",
                "date_format_lite": "m\/d\/Y",
                "date_format_full": "m\/d\/Y H:i:s",
                "id": 1
            },
            "page": {
                "title": "",
                "canonical": null,
                "meta": {
                    "title": "Roman Home3",
                    "description": "Shop powered by PrestaShop",
                    "keywords": "",
                    "robots": "index"
                },
                "page_name": "index",
                "body_classes": {
                    "lang-en": true,
                    "lang-rtl": false,
                    "country-US": true,
                    "currency-USD": true,
                    "layout-full-width": true,
                    "page-index": true,
                    "tax-display-disabled": true
                },
                "admin_notifications": []
            },
            "shop": {
                "name": "Roman Home3",
                "email": "sales@yoursite.com",
                "registration_number": "",
                "long": false,
                "lat": false,
                "logo": "\/ps-roman\/store\/home3\/img\/roman3-logo-15205662603.jpg",
                "stores_icon": "\/ps-roman\/store\/home3\/img\/logo_stores.png",
                "favicon": "\/ps-roman\/store\/home3\/img\/favicon.ico",
                "favicon_update_time": "1520566260",
                "address": {
                    "formatted": "Roman Home3<br>No 40 Baria Sreet 133\/2 NewYork City, NY, United States<br>United States",
                    "address1": "No 40 Baria Sreet 133\/2",
                    "address2": "NewYork City, NY, United States",
                    "postcode": "",
                    "city": "",
                    "state": null,
                    "country": "United States"
                },
                "phone": "(+84) 0123456789",
                "fax": "(800) 123 456 789"
            },
            "urls": {
                "base_url": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/",
                "current_url": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/",
                "shop_domain_url": "http:\/\/demo.fieldthemes.com",
                "img_ps_url": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/img\/",
                "img_cat_url": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/img\/c\/",
                "img_lang_url": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/img\/l\/",
                "img_prod_url": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/img\/p\/",
                "img_manu_url": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/img\/m\/",
                "img_sup_url": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/img\/su\/",
                "img_ship_url": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/img\/s\/",
                "img_store_url": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/img\/st\/",
                "img_col_url": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/img\/co\/",
                "img_url": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/themes\/roman3\/assets\/img\/",
                "css_url": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/themes\/roman3\/assets\/css\/",
                "js_url": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/themes\/roman3\/assets\/js\/",
                "pic_url": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/upload\/",
                "pages": {
                    "address": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/address",
                    "addresses": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/addresses",
                    "authentication": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/login",
                    "cart": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/cart",
                    "category": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/index.php?controller=category",
                    "cms": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/index.php?controller=cms",
                    "contact": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/contact-us",
                    "discount": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/discount",
                    "guest_tracking": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/guest-tracking",
                    "history": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/order-history",
                    "identity": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/identity",
                    "index": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/",
                    "my_account": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/my-account",
                    "order_confirmation": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/order-confirmation",
                    "order_detail": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/index.php?controller=order-detail",
                    "order_follow": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/order-follow",
                    "order": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/order",
                    "order_return": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/index.php?controller=order-return",
                    "order_slip": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/credit-slip",
                    "pagenotfound": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/page-not-found",
                    "password": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/password-recovery",
                    "pdf_invoice": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/index.php?controller=pdf-invoice",
                    "pdf_order_return": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/index.php?controller=pdf-order-return",
                    "pdf_order_slip": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/index.php?controller=pdf-order-slip",
                    "prices_drop": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/prices-drop",
                    "product": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/index.php?controller=product",
                    "search": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/search",
                    "sitemap": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/sitemap",
                    "stores": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/stores",
                    "supplier": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/supplier",
                    "register": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/login?create_account=1",
                    "order_login": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/order?login=1"
                },
                "theme_assets": "\/ps-roman\/store\/home3\/themes\/roman3\/assets\/",
                "actions": {
                    "logout": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/?mylogout="
                }
            },
            "configuration": {
                "display_taxes_label": false,
                "low_quantity_threshold": 3,
                "is_b2b": false,
                "is_catalog": false,
                "show_prices": true,
                "opt_in": {
                    "partner": true
                },
                "quantity_discount": {
                    "type": "discount",
                    "label": "Discount"
                },
                "voucher_enabled": 0,
                "return_enabled": 0,
                "number_of_days_for_return": 14
            },
            "field_required": [],
            "breadcrumb": {
                "links": [{
                    "title": "Home",
                    "url": "http:\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/"
                }],
                "count": 1
            },
            "link": {
                "protocol_link": "http:\/\/",
                "protocol_content": "http:\/\/"
            },
            "time": 1535715560,
            "static_token": "3a55881f9f044c5388f084b6b347b79f",
            "token": "76e7ecc52280a1bd38a970bfb52ba328"
        };
        var productcompare_max_item = "You cannot add more than 5 product(s) to the product comparison";
        var productcompare_url =
            "index.html\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/module\/fieldcompare\/FieldCompareProduct";
        var search_url = "index.html\/\/demo.fieldthemes.com\/ps-roman\/store\/home3\/en\/search";
        var static_token = "3a55881f9f044c5388f084b6b347b79f";
        var success_send_email = "Send email successfully.";
        var wishlistProductsIds = "";
        var wishlist_button = "Go to my wishlist!";
        var wishlist_button_login = "Go to Login!";
        var wishlist_title_error = "Warning!";
        var wishlist_title_success = "My wishlist updated!";