<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit4a66f3d9a98e5272308047ab2d56f35b
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Stripe\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Stripe\\' => 
        array (
            0 => __DIR__ . '/..' . '/stripe/stripe-php/lib',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit4a66f3d9a98e5272308047ab2d56f35b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit4a66f3d9a98e5272308047ab2d56f35b::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
