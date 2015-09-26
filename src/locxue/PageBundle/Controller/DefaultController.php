<?php

namespace locxue\PageBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('locxuePageBundle:Default:index.html.twig', array('name' => $name));
    }
}
