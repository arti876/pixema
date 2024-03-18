import { Drawer } from '@mui/material';
import style from './Hamburger.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import NavMenu from '../NavMenu/NavMenu';

export default function Hamburger() {
  const [filterOpen, setFilterOpen] = useState<boolean>(false);

  function toggleDrawer() {
    setFilterOpen((open) => !open);
  }

  return (
    <>
      <button type='button' onClick={toggleDrawer} className={style.hamb}>
        <span className={clsx(style.hambSpanTop, { [style.activeSpanTop]: filterOpen })} />
        <span className={clsx(style.hambSpanMid, { [style.activeSpanMid]: filterOpen })} />
        <span className={clsx(style.hambSpanBot, { [style.activeSpanBot]: filterOpen })} />
      </button>
      <Drawer style={{ zIndex: 100 }} anchor={'right'} open={filterOpen} onClose={toggleDrawer}>
        <div className={clsx(style.menu, { [style.menuActive]: true })}>
          <NavMenu />
        </div>
      </Drawer>
    </>
  );
}
