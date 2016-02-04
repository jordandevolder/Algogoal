<?php

/**
 * Created by PhpStorm.
 * User: Jordan
 * Date: 04/02/2016
 * Time: 10:56
 */
namespace Models\Queries;
use Helpers\DB\Query;

class PersonneSQL extends Query
{
    public function prepareFindByLogin($login) {
        $tmp = parent::__call("prepareFindByLogin",array($login))->execute();
        if(count($tmp)==0)
            return false;
        return $tmp[0];
    }
}