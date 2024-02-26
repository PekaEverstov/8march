function distributeOrders(orders, couriers) {
    // Для каждого заказа находим самого близкого курьера и рассчитываем время доставки
    orders.forEach(order => {
        let minDeliveryTime = Infinity;
        let fastestCourier = null;

        couriers.forEach(courier => {
            const distance = calculateDistance(order.from, courier);
            const deliveryTime = distance / courier.speed; // Время в часах

            if (deliveryTime < minDeliveryTime) {
                minDeliveryTime = deliveryTime;
                fastestCourier = courier;
            }
        });

        order.deliveryTime = minDeliveryTime;
        order.nearestCourier = fastestCourier;
    });

    // Сортируем заказы по времени доставки от наименьшего к наибольшему
    orders.sort((a, b) => a.deliveryTime - b.deliveryTime);

    return orders;
}