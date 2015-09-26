<?php

namespace locxue\PageBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class EventosController extends Controller
{
    public function indexAction()
    {
        return $this->render('locxuePageBundle:Eventos:index.html.twig');
    }
}
