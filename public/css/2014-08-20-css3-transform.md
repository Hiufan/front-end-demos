# transform 
> 11 chapter-11

## transform属性 
### 语法
	transform: none | <transform-function> [<transform-function>]*
### transform-function
	- 2D
	- 3D
	- other

### transform-origin
> 设置旋转坐标默认值为 center center 

### transform-style
> 指定嵌套原属如何在3D中呈现
```css
transform-style: flat | preserve-3d
```
- flat: 默认
- preserve-3d: 3d

### perspective

### perspective-origin

### backface-visibility
> 旋转原属背面是否可见

------------------

## 2D()
### translate()
> 位置移动
### scale()
> 缩放
### rotate()
> 旋转
### skew()
> 倾斜
### matrix()
> 以上所有操作的集合

---------------------

## 3D()
### translate3d()
### translate()
### scale3d()
### scaleZ()
### rotate3d()
### rotateX() rotateY() rotateZ()
### perspective()
### matrix3d()
