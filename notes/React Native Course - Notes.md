# The Complete React Native + Hooks Course



### Layout Systems

**Box Object Model:** The height/width of an element + the space around it. Use this to affect the positioning of a single element.

**Flex Box:** How some number of sibling elements get laid out inside a parent. Use this to position mutliple elements witha commom parent.

**Position:** How a single element gets laid out inside of a parent. Use this to override Box Object Model + Flex Box.



### Commands

#### PARENT

**alignItems:** Specifies the default alignment for items inside the flexible container. The alignment is perpendicular to the box.

​	***Values:*** stretch (default), center, flex-start, flex-end, baseline, initial, inherit

**flexDirection:** Specifies the direction of the flexible items.

​	***Values:*** row (default), row-reverse, column, column-reverse, initial, inherit

**justifyContent:** Aligns the flexible container's items when tie items do not use all the available space on the main-axis (horizontally).

​	***Values:*** flex-start (default), flex-end, denter, space-between, space-around, initial, inherit



#### CHILD

**flex**: Specifies the weight for the item to take on the parents space

​	***Values:*** Any integer 

**alignSelf:** Specifies the alignment for the selected item inside the flexible container. Overrides the flexible container's alignItems property.

​	***Values:*** auto (default), stretch, center, flex-center, flex-end, baseline, initial, inherit





### Yelp

**Cliend ID**

PtptOA28gGrQia4z3bb8Kg



**API Key**

0JdcnoyqXk_O-L0LMwRJ91LjpE10zoJgS7wG6YKAM7pBxbVabIb5N2DQ8WjtW75f7eBKlMbkJTnG8Ux9c0FyHChh3gLyA6GvhksqoM0noFdtQ8NVRI8UCb7uKILvXnYx



expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view