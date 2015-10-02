<?php

namespace locxue\PageBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DonarController extends Controller
{
    public function indexAction()
    {
        return $this->render('locxuePageBundle:Donar:index.html.twig');
    }
}
