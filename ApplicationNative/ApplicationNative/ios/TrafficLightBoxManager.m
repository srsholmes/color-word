#import "TrafficLightBoxManager.h"
#import "TrafficLightBox.h"
#import <UIKit/UIKit.h>

@implementation TrafficLightBoxManager

RCT_EXPORT_MODULE()

// Returns the custom view
- (UIView *)view
{
  TrafficLightBox * theView;
  theView = [[TrafficLightBox alloc] init];
  return theView;
}

RCT_EXPORT_VIEW_PROPERTY(isRed, BOOL)
RCT_EXPORT_VIEW_PROPERTY(isTransparent, BOOL)


RCT_CUSTOM_VIEW_PROPERTY(setIsRed, BOOL, TrafficLightBox)
{
  [view setIsRed:YES];
}

RCT_CUSTOM_VIEW_PROPERTY(setIsTransparent, BOOL, TrafficLightBox)
{
  [view setIsTransparent:YES];
}

@end
