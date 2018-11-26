<?php

namespace TROISWA\PlatformBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;


class AdvertController extends Controller
{
    public function indexAction($name)
    {
    	$listAdverts = array(
          array(
            'title'   => 'Recherche développpeur Symfony',
            'id'      => 1,
            'author'  => 'Alexandre',
            'content' => 'Nous recherchons un développeur Symfony débutant sur Lyon. Blabla…',
            'date'    => new \Datetime()),
          array(
            'title'   => 'Mission de webmaster',
            'id'      => 2,
            'author'  => 'Hugo',
            'content' => 'Nous recherchons un webmaster capable de maintenir notre site internet. Blabla…',
            'date'    => new \Datetime()),
          array(
            'title'   => 'Offre de stage webdesigner',
            'id'      => 3,
            'author'  => 'Mathieu',
            'content' => 'Nous proposons un poste pour webdesigner. Blabla…',
            'date'    => new \Datetime())
        );


    	$content = $this->get('templating')->render('TROISWAPlatformBundle:Advert:index.html.twig', ["nom" => $name, 'listAdverts'=> $listAdverts]);


        return new Response($content);

    }
    public function viewAction($id)
    {
   		$advert = array(
          'title'   => 'Recherche développpeur Symfony3',
          'id'      => $id,
          'author'  => 'Alexandre',
          'content' => 'Nous recherchons un développeur Symfony2 débutant sur Lyon. Blabla…',
          'date'    => new \Datetime()
        );

        return $this->render('TROISWAPlatformBundle:Advert:view.html.twig', array(
          'advert' => $advert
        ));

    }
    public function addAction(Request $request)
    {


     	return $this->render('TROISWAPlatformBundle:Advert:add.html.twig');

    }

}
