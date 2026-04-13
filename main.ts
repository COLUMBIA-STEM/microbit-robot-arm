radio.onReceivedNumber(function (receivedNumber) {
    I = receivedNumber
})
let I = 0
radio.setGroup(0)
I = 99
basic.forever(function () {
    if (I == 1) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -50)
    }
    if (I == 2) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 50)
    }
    if (I == 3) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 30)
    }
    if (I == 4) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -30)
    }
    if (I == 5) {
        servos.P2.setAngle(0)
    }
    if (I == 6) {
        servos.P2.setAngle(30)
    }
    if (I == 0) {
        wuKong.stopAllMotor()
    }
})
