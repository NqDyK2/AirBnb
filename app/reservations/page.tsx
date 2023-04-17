import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import ReservationsClient from "./ReservationsClient";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";

import React from 'react'

const ReservationsPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState
                    title="Unauthorized"
                    subtitle="Please login"
                />
            </ClientOnly>
        )
    }

    const reservation = await getReservations({
        authorId: currentUser.id
    });

    if (reservation.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No reservation found"
                    subtitle="Looks like you have no reservations on your properties"
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <ReservationsClient
                reservations={reservation}
                currentUser={currentUser}
            />
        </ClientOnly>
    )

}

export default ReservationsPage;
