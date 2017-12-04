var TOTAL_SALE = 0;
var STOCK = 10;
var CLOTHING = {
    jackets: [
        {
            type: 'jackets',
            description: 'Barn Coat',
            price: 169.99,
            stock: 10,
            image: 'photos/jacket_1.jpg'
        },
        {
            type: 'jackets',
            description: 'Weatherbreaker Jacket',
            price: 169.99,
            stock: 10,
            image: 'photos/jacket_2.jpg'
        },
        {
            type: 'jackets',
            description: 'Barbour Ashby Jacket',
            price: 399.99,
            stock: 10,
            image: 'photos/jacket_3.jpg'
        },
        {
            type: 'jackets',
            description: 'Heritage Field Coat',
            price: 249.99,
            stock: 10,
            image: 'photos/jacket_4.jpg'
        },
        {
            type: 'jackets',
            description: 'Bedale Jacket',
            price: 379.99,
            stock: 10,
            image: 'photos/jacket_5.jpg'
        },
        {
            type: 'jackets',
            description: 'Brome Jacket',
            price: 429.99,
            stock: 10,
            image: 'photos/jacket_6.jpg'
        },
        {
            type: 'jackets',
            description: 'Wool Driving Coat',
            price: 298.99,
            stock: 10,
            image: 'photos/jacket_7.jpg'
        },
        {
            type: 'jackets',
            description: 'Bedale Jacket',
            price: 379.99,
            stock: 10,
            image: 'photos/jacket_8.jpg'
        },
        {
            type: 'jackets',
            description: 'Shearling Coat',
            price: 999.99,
            stock: 10,
            image: 'photos/jacket_9.jpg'
        },
        {
            type: 'jackets',
            description: 'Redfield Leather Jacket',
            price: 494.99,
            stock: 10,
            image: 'photos/jacket_10.jpg'
        }
    ],
    shirts: [
        {
            type: 'shirts',
            description: 'Brushed Herringbone',
            price: 89.99,
            stock: 10,
            image: 'photos/collared_1.jpg'
        },
        {
            type: 'shirts',
            description: 'Tartan Long-Sleeved Shirt',
            price: 89.99,
            stock: 10,
            image: 'photos/collared_2.jpg'
        },
        {
            type: 'shirts',
            description: 'Signature Twill Long-Sleeved Shirt',
            price: 89.99,
            stock: 10,
            image: 'photos/collared_3.jpg'
        },
        {
            type: 'shirts',
            description: 'Pure Cotton Denim Shirt',
            price: 89.99,
            stock: 10,
            image: 'photos/collared_4.jpg'
        },
        {
            type: 'shirts',
            description: 'Hidden-Button-Down Wrinkle-Free Cotton Twill Shirt',
            price: 89.99,
            stock: 10,
            image: 'photos/collared_5.jpg'
        },
        {
            type: 'shirts',
            description: 'Heathered Houndstooth Shirt',
            price: 89.99,
            stock: 10,
            image: 'photos/collared_6.jpg'
        },
        {
            type: 'shirts',
            description: 'Tech Chambray Work Shirt',
            price: 89.99,
            stock: 10,
            image: 'photos/collared_7.jpg'
        },
        {
            type: 'shirts',
            description: 'Luxury Flannel Shirt',
            price: 89.99,
            stock: 10,
            image: 'photos/collared_8.jpg'
        },
        {
            type: 'shirts',
            description: 'Bush Shirt',
            price: 89.99,
            stock: 10,
            image: 'photos/collared_9.jpg'
        },
        {
            type: 'shirts',
            description: 'Corded Long-Sleeved Shirt',
            price: 89.99,
            stock: 10,
            image: 'photos/collared_10.jpg'
        }
    ],
    tshirts: [
        {
            type: 'tshirts',
            description: 'Dri-Release Casting T-Shirt',
            price: 49.99,
            stock: 10,
            image: 'photos/tshirt_1.jpg'
        },
        {
            type: 'tshirts',
            description: 'Dog Stamp Tee',
            price: 49.99,
            stock: 10,
            image: 'photos/tshirt_2.jpg'
        },
        {
            type: 'tshirts',
            description: 'Trout Stamp Tee',
            price: 49.99,
            stock: 10,
            image: 'photos/tshirt_3.jpg'
        },
        {
            type: 'tshirts',
            description: 'Hawker Henley',
            price: 79.99,
            stock: 10,
            image: 'photos/tshirt_4.jpg'
        },
        {
            type: 'tshirts',
            description: 'Montana Morning Retro',
            price: 69.99,
            stock: 10,
            image: 'photos/tshirt_5.jpg'
        },
        {
            type: 'tshirts',
            description: 'Pima Cotton Mockneck',
            price: 89.99,
            stock: 10,
            image: 'photos/tshirt_6.jpg'
        },
        {
            type: 'tshirts',
            description: 'Skyline Long-Sleeved',
            price: 49.99,
            stock: 10,
            image: 'photos/tshirt_7.jpg'
        },
        {
            type: 'tshirts',
            description: 'Rooster Long-Sleeved',
            price: 49.99,
            stock: 10,
            image: 'photos/tshirt_8.jpg'
        },
        {
            type: 'tshirts',
            description: 'Brown Trout Dri-Release Long-Sleeved',
            price: 49.99,
            stock: 10,
            image: 'photos/tshirt_9.jpg'
        },
        {
            type: 'tshirts',
            description: 'Fish Dri-Release Long-Sleeved',
            price: 49.99,
            stock: 10,
            image: 'photos/tshirt_10.jpg'
        }
    ],
    pants: [
        {
            type: 'pants',
            description: 'County Donegal Tweed Pants',
            price: 169.99,
            stock: 10,
            image: 'photos/pants_1.jpg'
        },
        {
            type: 'pants',
            description: 'Ultimate Khakis-Plain',
            price: 119.99,
            stock: 10,
            image: 'photos/pants_2.jpg'
        },
        {
            type: 'pants',
            description: 'Supercord Pants',
            price: 119.99,
            stock: 10,
            image: 'photos/pants_3.jpg'
        },
        {
            type: 'pants',
            description: 'Comfort-Waist Merino Flannel Pants',
            price: 149.99,
            stock: 10,
            image: 'photos/pants_4.jpg'
        },
        {
            type: 'pants',
            description: '1856 Stretch Cords',
            price: 109.99,
            stock: 10,
            image: 'photos/pants_5.jpg'
        },
        {
            type: 'pants',
            description: 'Stretch Moleskin Pants Plain',
            price: 149.99,
            stock: 10,
            image: 'photos/pants_6.jpg'
        },
        {
            type: 'pants',
            description: 'Wrinkle-Free Pure Cotton Chinos',
            price: 98.99,
            stock: 10,
            image: 'photos/pants_7.jpg'
        },
        {
            type: 'pants',
            description: 'Wrinkle-Free Comfort-Waist Chinos',
            price: 109.99,
            stock: 10,
            image: 'photos/pants_8.jpg'
        },
        {
            type: 'pants',
            description: 'Insulated Rider Pants',
            price: 79.99,
            stock: 10,
            image: 'photos/pants_9.jpg'
        },
        {
            type: 'pants',
            description: 'All Transit Pants',
            price: 98.99,
            stock: 10,
            image: 'photos/pants_10.jpg'
        }
    ],
    socks: [
        {
            type: 'socks',
            description: 'Invincible Socks',
            price: 49.99,
            stock: 10,
            image: 'photos/socks_1.jpg'
        },
        {
            type: 'socks',
            description: 'Invincible Cotton Sock',
            price: 39.99,
            stock: 10,
            image: 'photos/socks_2.jpg'
        },
        {
            type: 'socks',
            description: 'Isle Socks',
            price: 39.99,
            stock: 10,
            image: 'photos/socks_3.jpg'
        },
        {
            type: 'socks',
            description: 'Invincible Athletic Socks',
            price: 39.99,
            stock: 10,
            image: 'photos/socks_4.jpg'
        }
    ],
    shoes: [
        {
            type: 'shoes',
            description: 'Australian Shearling-Lined Slippers',
            price: 199.99,
            stock: 10,
            image: 'photos/shoes_1.jpg'
        },
        {
            type: 'shoes',
            description: 'Gokey Shearling Lined Double-Sole Mocs',
            price: 229.99,
            stock: 10,
            image: 'photos/shoes_2.jpg'
        },
        {
            type: 'shoes',
            description: 'Ultralight 8" Boots',
            price: 399.99,
            stock: 10,
            image: 'photos/shoes_3.jpg'
        },
        {
            type: 'shoes',
            description: 'Sauvage Oxfords',
            price: 249.99,
            stock: 10,
            image: 'photos/shoes_4.jpg'
        },
        {
            type: 'shoes',
            description: 'Jenson Boot',
            price: 299.99,
            stock: 10,
            image: 'photos/shoes_5.jpg'
        },
        {
            type: 'shoes',
            description: 'English Brogue Boot',
            price: 399.99,
            stock: 10,
            image: 'photos/shoes_6.jpg'
        }
    ]
};
// ******************Items***************
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function oneItem(x) {
    return [
        '<div class="col-lg-3 col-sm-6 item-div">',
        '<div class="panel panel-default"><div class="panel-body">',
        '<p class="img-center"><img src="' + x.image + '"/></p>',
        '<p>Price: $' + x.price + '</p>',
        '<p>In Stock: ' + x.stock + '</p>',
        '<p>Type: ' + x.description + '</p>',
        '<p class="img-center"><button onclick=\'addToCart(' +
            JSON.stringify(x) +
            ')\' type="button" class="btn btn-success">add to cart <i class="fa fa-cart-plus" aria-hidden="true"></i></button></p></div></div></div>'
    ].join('');
}

function showItems(itemtype) {
    $('#' + itemtype).removeClass('hide');
    $('.buy-items').show();
    $('.for-sale').hide();
    $('#cart')
        .addClass('hide')
        .removeClass('show');
    $('#sell-item-form')
        .addClass('hide')
        .removeClass('show');
    var html =
        '<br><br><br><h1 id="clothing-title">' +
        capitalizeFirstLetter(itemtype) +
        '</h1><br>' +
        CLOTHING[itemtype]
            .map(function(x) {
                return oneItem(x);
            })
            .join('');
    $('#' + itemtype)
        .html(html)
        .show();
}

// ***********add to cart********
function subtractStock(x) {
    x.stock -= 1;
    return x;
}

function addToCart(x) {
    subtractStock(x);
    TOTAL_SALE += x.price;
    var html =
        '<p class="navbar-cart"> Total: $' + TOTAL_SALE.toFixed(2) + '</p>';
    html += TOTAL_SALE + $('.navbar-cart').html(html);
    $('#cart').prepend(
        '<div class="col-lg-3 col-sm-6">' +
            '<h1>Checkout</h2>' +
            '<div class="panel panel-default"><div class="panel-body">' +
            '<p class="img-center"><img src="' +
            x.image +
            '"/></p>' +
            '<p>Price: $' +
            x.price +
            '</p>' +
            '<p>In Stock: ' +
            x.stock +
            '</p>' +
            '<p>Type: ' +
            x.description +
            '</p></div></div></div>'
    );
    setTimeout(function() {
        x = subtractStock(x);
        console.log(x);
        showItems(x.type);
    }, 1000);
}

function showCart() {
    $('.buy-items').hide();
    $('#cart')
        .removeClass('hide')
        .show();
}

// *********sell an item*************
function sell() {
    $('.buy-items').hide();
    $('#cart').hide();
    $('.homepage').hide();
    $('#sell-item-form')
        .removeClass('hide')
        .show();
}

function addtoClothing() {
    CLOTHING[$('#type').val()].push({
        type: $('#type').val(),
        description: $('#description').val(),
        price: $('#price').val(),
        stock: 1,
        image: 'photos/company-logo.png'
    });
    $('#type').val('');
    $('#description').val('');
    $('#price').val('');
}
