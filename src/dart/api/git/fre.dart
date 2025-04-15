import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:new_app/components/customizedButton.dart';

class RoomSingleDevice extends StatefulWidget {
  const RoomSingleDevice({super.key});

  @override
  State<RoomSingleDevice> createState() => _RoomSingleDeviceState();
}

class _RoomSingleDeviceState extends State<RoomSingleDevice> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white.withOpacity(.1),
      body: Column(
        children: [
          Expanded(
            child: SingleChildScrollView(
              child: Column(
                children: [
                  Container(
                    height: MediaQuery.of(context).size.height * 0.2,
                    decoration: BoxDecoration(
                      image: DecorationImage(
                        image: AssetImage('assets/images/livingRoom.jpg'),
                        fit: BoxFit.cover,
                      ),
                    ),
                    child: Stack(
                      children: [
                        Positioned(
                          top: MediaQuery.of(context).size.height * 0.02,
                          left: 0,
                          right: 0,
                          child: Container(
                            height: 65,
                            width: 274,
                            padding: EdgeInsets.symmetric(
                              horizontal:
                                  MediaQuery.of(context).size.width * 0.03,
                            ),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              crossAxisAlignment: CrossAxisAlignment.center,
                              children: [
                                Container(
                                  height: 40,
                                  width: 40,
                                  padding: EdgeInsets.symmetric(
                                    horizontal: 10,
                                    vertical: 10,
                                  ),
                                  decoration: BoxDecoration(
                                    color: Color(0xFF31373C),
                                    borderRadius: BorderRadius.circular(70),
                                  ),
                                  child: InkWell(
                                    onTap: () {
                                      Navigator.pop(context);
                                    },
                                    child: SvgPicture.asset(
                                      fit: BoxFit.contain,
                                      'assets/icons/greaterThan.svg',
                                      height: 1,
                                      width: 10,
                                    ),
                                  ),
                                ),
                                InkWell(
                                  onTap: () {},
                                  child: Text(
                                    "Living Room",
                                    style: TextStyle(
                                      color: Colors.white,
                                      fontSize: 20,
                                      fontWeight: FontWeight.w800,
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                        Positioned(
                          child: Align(
                            alignment: Alignment.bottomCenter,
                            child: Container(
                              height: 80,
                              decoration: BoxDecoration(
                                gradient: LinearGradient(
                                  begin: Alignment.bottomCenter,
                                  end: Alignment.topCenter,
                                  colors: [
                                    Color(0xFF181D23),
                                    Colors.transparent,
                                  ],
                                  stops: [0.0, 0.7],
                                  tileMode: TileMode.mirror,
                                ),
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  SizedBox(height: MediaQuery.of(context).size.height * 0.02),
                  Text(
                    'Amazon Echo Dot 3',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 25,
                      fontWeight: FontWeight.w800,
                    ),
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      Column(
                        children: [
                          SvgPicture.asset('assets/icons/toggleButtonOn.svg'),
                          Text(
                            '98%',
                            style: TextStyle(
                              color: Color(0xFFB9F249),
                              fontSize: 25,
                              fontWeight: FontWeight.w800,
                            ),
                          ),
                          Positioned(
                            right: 0,
                            child: Image.asset('assets/images/AirCond.png'),
                          ),
                        ],
                      ),
                    ],
                  ),
                  SizedBox(
                    width: MediaQuery.of(context).size.width * 0.9,
                    child: Customizedbutton(
                      label: 'ADD DEVICE',
                      labelColor: Colors.black,
                      buttonColor: Color(0xFFB9F249),
                      bottomModal: () {
                        Navigator.of(context).pop();
                      },
                    ),
                  ),
                  SizedBox(height: MediaQuery.of(context).size.height * 0.04),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
