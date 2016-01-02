#import "TrafficLightBox.h"

@implementation TrafficLightBox
{
  UIColor *squareColor;
  float alphaV;
}

- (void)setIsRed:(BOOL)isRed
{
  squareColor = (isRed)  ? [UIColor redColor] : [UIColor greenColor];
  [self setNeedsDisplay];
}

- (void)setIsTransparent:(BOOL)isTransparent
{
  alphaV= (isTransparent)  ? 0.7 : 1;
  [self setNeedsDisplay];
}

- (instancetype)init
{
  self = [super init];
  if (self) {
    self.isRed = NO;
  }
  return self;
}

- (void)drawRect:(CGRect)rect
{
  [super drawRect:rect];
  [squareColor setFill];
  [self setAlpha:alphaV];
  CGContextFillRect(UIGraphicsGetCurrentContext(), rect);
}

@end
