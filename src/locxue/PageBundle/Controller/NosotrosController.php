<?php

namespace locxue\PageBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class NosotrosController extends Controller
{
    public function indexAction()
    {
        return $this->render('locxuePageBundle:Default:nosotros.html.twig');
    }
       public function historiaAction()
    {
        return $this->render('locxuePageBundle:Default:historia.html.twig');
    }
}
