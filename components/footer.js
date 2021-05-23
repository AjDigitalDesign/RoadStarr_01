
import Link from 'next/link';
import Head from 'next/head';
import {useState} from 'react'
import {Nav}  from  'react-bootstrap'
import {Container}  from 'react-bootstrap'
import Image from 'next/image';


export default function Footer() {
  return (
       <footer class="bg-light py-5">
            <div class="container px-4 px-lg-5"><div class="small text-center text-muted">Copyright &copy; 2021 - ROADSTARR.</div></div>
        </footer>
  )
}
