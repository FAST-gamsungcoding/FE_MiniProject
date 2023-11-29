'use client';
import React from 'react';
import ReservationItem from './_components/reservation-item/page';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './reservationList.module.scss';
import useReservationList from '@/hooks/reservation-list';
import Text from '@/components/atoms/text';

function ReservationList() {
  const { reservationItems, fetchNextPage, hasNextPage } = useReservationList();

  if (reservationItems?.length === 0) {
    return (
      <section className={styles.reservationItemContainer}>
        <Text fontSize="md" fontWeight="semibold" color="blackAlpha100">
          고객님의 예약내역이 존재하지 않습니다
        </Text>
      </section>
    );
  }

  return (
    <InfiniteScroll
      dataLength={reservationItems?.length ?? 0}
      scrollThreshold={0.95}
      next={fetchNextPage}
      hasMore={hasNextPage ?? false}
      loader={<h4>Loading...</h4>}>
      <section className={styles.reservationItemContainer}>
        {reservationItems?.map((item, index) => (
          <ReservationItem key={index} item={item} />
        ))}
      </section>
    </InfiniteScroll>
  );
}

export default ReservationList;
