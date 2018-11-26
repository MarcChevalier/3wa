<?php

namespace TROISWA\PlatformBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class AddController extends Controller
{

  public function addAction()
    {
    	$url = $this->get('router')->generate(
            'troiswa_platform_add',
             UrlGeneratorInterface::ABSOLUTE_URL);

            var_dump($url);
            $tab = ['a', 'b', 'c'];

        $content = $this->get('templating')->render('TROISWAPlatformBundle:Add:index.html.twig');


        return new Response($content);

    }



}
